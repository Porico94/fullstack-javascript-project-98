#!/usr/bin/env node
import { isPrime, description } from '../src/games/isPrime.js';
import runGame from '../src/index.js';

runGame(isPrime, description);
