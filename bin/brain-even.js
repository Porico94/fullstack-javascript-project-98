#!/usr/bin/env node
import { parityCheck, description } from '../src/games/parityCheck.js';
import runGame from '../src/index.js';

runGame(parityCheck, description);
