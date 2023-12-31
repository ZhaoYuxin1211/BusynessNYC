import React from 'react';
import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
// import cursorImage from './cursorcar.png';
import { HiChevronDoubleDown } from 'react-icons/hi';

// Hero component
const Hero = () => {
    // Cursor star effect part
    // const [cursorStars, setCursorStars] = useState([]);

    // const updateCursorPosition = (e) => {
    //     const newStar = {
    //         x: e.pageX,
    //         y: e.pageY,
    //         id: Date.now()
    //     };
    //     setCursorStars((prevStars) => [...prevStars.slice(-7), newStar]);
    // };

    // useEffect(() => {
    //     window.addEventListener('mousemove', updateCursorPosition);

    //     return () => {
    //         window.removeEventListener('mousemove', updateCursorPosition);
    //     };
    // }, []);

    return (
        // The component returns JSX elements wrapped inside a 'Container' element with an 'id' attribute set to "hero".
        <Container id="hero">
            {/* The 'Left' component represents the left section of the hero section */}
            <Left>
                {/* The 'SmallLine' component displays a small line, using an SVG image*/}
                <SmallLine src="../img/line_small.svg"></SmallLine>
                {/* The 'Title' component displays the main title "Auto Mate" and an inline marker image*/}
                <Title>
                    Auto Mate
                    <Marker src="../img/marker.png" />
                </Title>
                {/* The 'Text' component displays the text "Your Parking Assistant" */}
                <Text>Your Driving Assistant</Text>
                {/* The 'Skyline' component displays an image of a skyline*/}
                <Skyline src="../img/skyline.jpeg" />
            </Left>

            {/* The 'Right' component represents the right section of the container */}
            <Right>
                {/* The 'ToMap' component is a button that allows users to navigate to the Map section */}
                <ToMap>
                    <a href="#main">MAP</a>
                </ToMap>
                {/* The 'BigLine' component displays a large line, using an SVG image*/}
                <BigLine src="../img/line_large.svg" />
            </Right>

            {/* The 'Ground' component represents a section of the container closer to the bottom */}
            <Ground>
                {/* The 'TextMobile' component displays text
                <TextMobile>
                    Your Perfect Parking Companion! Discover hassle-free parking
                    spots on the go.
                </TextMobile> */}
                <AnimatedHiChevronDoubleDown />
            </Ground>

            {/* The 'CarShadow' component displays a shadow image of a car*/}
            <CarShadow src="../img/shadow.svg" />
            <Car src="../img/car.png" />

            {/* Cursor effect component     */}
            {/* {cursorStars.map((star, index) => (
                <StarCursor
                    key={star.id}
                    style={{
                        left: star.x + 'px',
                        top: star.y + 'px',
                        animationDelay: `0s`
                    }}
                />
            ))} */}
        </Container>
    );
};

export default Hero;

// Styled components
// This defines a wave-like vertical translation animation for an element.
const waveAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// This defines an animation that slides an element in from the top while fading in.
const slideInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// This defines an animation that slides an element in from the right while fading in.
const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const rotate3DAnimation = keyframes`
    0% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(360deg);
    }
`;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100vh;
    background-color: white;
    scroll-snap-align: center;

    @keyframes slideInFromTop {
        0% {
            opacity: 0;
            transform: translateY(-30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInFromRight {
        0% {
            opacity: 0;
            transform: translateX(30px);
        }
        40% {
            transform: translateY(-200%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

// const TextMobile = styled.p`
//     display: none;
//     color: white;
//     font-size: 1.5rem;
//     font-family: Roboto;
//     font-style: italic;
//     font-weight: 100;
//     line-height: 170%;
//     letter-spacing: 4px;
//     padding-left: 8%;
//     @media screen and (max-width: 400px) {
//         display: block;
//     }
// `;

const Left = styled.div`
    position: relative;
    flex: 1;
    height: 100vh;
    background-color: white;
    scroll-snap-align: center;
    z-index: 2;
`;

const Right = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;
    height: 100vh;
    background-color: white;
    scroll-snap-align: center;
    z-index: 1;
`;

const SmallLine = styled.img`
    margin-top: 72px;
    margin-left: 8%;
    width: 15%;
`;

const BigLine = styled.img`
    position: absolute;
    top: 116px;
    right: 0;
    width: 70%;
    color: #ffa500;
`;

const Title = styled.div`
    display: flex;
    color: #000;
    font-size: 5rem;
    font-family: Roboto;
    font-style: italic;
    font-weight: 500;
    line-height: 170%;
    letter-spacing: 8px;
    padding-left: 8%;
    animation: ${slideInFromTop} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @media screen and (max-width: 900px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 760px) {
        font-size: 1.5rem;
    }
`;

const Marker = styled.img`
    width: 60px;
    height: 81.6px;
    padding-left: 2%;
    padding-top: 2%;
    animation: slideInFromTop 1.5s ease-in-out,
        ${rotate3DAnimation} 3s linear infinite;

    @media screen and (max-width: 900px) {
        width: 3rem;
        height: 4.08rem;
    }

    @media screen and (max-width: 760px) {
        width: 1.5rem;
        height: 2.04rem;
    }
`;

const Text = styled.div`
    white-space: nowrap;
    color: #000;
    font-size: 3.5rem;
    font-family: Roboto;
    font-style: bold;
    font-weight: 100;
    line-height: 170%;
    letter-spacing: 8px;
    padding-left: 8%;
    z-index: 100;
    animation: ${slideInFromRight} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
    @media screen and (max-width: 900px) {
        white-space: normal;
        font-size: 3rem;
    }

    @media screen and (max-width: 760px) {
        font-size: 1.5rem;
    }
`;

const Skyline = styled.img`
    position: absolute;
    opacity: 0.25;
    width: 50vw;
    height: auto;
    bottom: 24%;
    padding-left: 8%;

    @media screen and (max-width: 900px) {
        width: 100vw;
        height: auto;
        bottom: 24%;
    }

    @media screen and (max-width: 400px) {
        width: 100vw;
        height: auto;
        bottom: 50%;
    }
`;

const ToMap = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.5);
    width: 124px;
    height: 36.5px;
    color: #000;
    font-size: 1.5rem;
    font-family: Roboto;
    font-style: italic;
    font-weight: 100;
    line-height: 171.688%;
    letter-spacing: 4.5px;
    cursor: pointer;
    animation: ${waveAnimation} 2s linear infinite;

    @media screen and (max-width: 760px) {
        font-size: 0.75rem;
        width: 62px;
        height: 20px;
    }
`;

const Car = styled.img`
    position: absolute;
    width: 48%;
    right: -2%;
    bottom: 4%;
    z-index: 12;
    animation: ${slideInFromRight} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;

    @media screen and (max-width: 900px) {
        width: 65%;
    }

    @media screen and (max-width: 400px) {
        width: 75%;
        bottom: 40%;
    }
`;

const CarShadow = styled.img`
    position: absolute;
    width: 48%;
    right: -2%;
    bottom: 4%;
    z-index: 12;
    animation: ${slideInFromRight} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;

    @media screen and (max-width: 900px) {
        width: 65%;
    }
    @media screen and (max-width: 400px) {
        width: 75%;
        bottom: 40%;
    }
`;

const Ground = styled.div`
    position: absolute;
    width: 100%;
    background-color: #ffa600;
    height: 24%;
    z-index: 11;
    top: 76%;
    padding-top: 80px;
    padding-left: 20px;

    @media screen and (max-width: 400px) {
        top: 50%;
        height: 50%;
    }
`;

// const sparkleAnimation = keyframes`
//   0%, 100% {
//     opacity: 0.5;
//     transform: scale(1);
//   }
//   50% {
//     opacity: 1;
//     transform: scale(1.5);
//   }
// `;

// const fadeOutAnimation = keyframes`
//   from {
//     opacity: 1;
//   }
//   to {
//     opacity: 0;
//   }
// `;

// const StarCursor = styled.div`
//     width: 20px;
//     height: 20px;
//     background-color: #00ffff;
//     clip-path: polygon(
//         50% 0%,
//         61.8% 38.2%,
//         100% 35.4%,
//         68.2% 57.3%,
//         79.4% 91.6%,
//         50% 70.9%,
//         20.6% 91.6%,
//         31.8% 57.3%,
//         0% 35.4%,
//         38.2% 38.2%
//     );
//     position: fixed;
//     pointer-events: none;
//     z-index: 999;
//     animation: ${sparkleAnimation} 1.5s infinite,
//         ${fadeOutAnimation} 1s forwards;
// `;

const moveDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const AnimatedHiChevronDoubleDown = styled(HiChevronDoubleDown)`
    animation: ${moveDown} 2s infinite;
    position: absolute;
    left: 45%;
    bottom: 30px;
    transform: translateX(-50%);
    zoom: 1.5;
`;
