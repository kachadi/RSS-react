/* eslint-disable */
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

window.URL.createObjectURL = function (obj: Blob | MediaSource): string {};

expect.extend(matchers);
