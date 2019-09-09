import React from "react";

const getRandomInteger = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
const MIN_SIZE = 200;
const MAX_SIZE = 400;

class RandomMurray extends React.Component {
  render() {
    const randomMurray = getRandomInteger(MIN_SIZE, MAX_SIZE);

    return <img src={`http://loremmurray.com/400/200/${randomMurray}`} alt="Random murray" />;
  }
}

export default RandomMurray;
