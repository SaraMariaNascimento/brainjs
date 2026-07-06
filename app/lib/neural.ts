import { NeuralNetwork } from 'brain.js';

export function trainXor() {
  const net = new NeuralNetwork<number[], number[]>({ hiddenLayers: [3] });

  net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
  ]);

  return {
    result_00: net.run([0, 0])[0],
    result_01: net.run([0, 1])[0],
    result_10: net.run([1, 0])[0],
    result_11: net.run([1, 1])[0],
  };
}