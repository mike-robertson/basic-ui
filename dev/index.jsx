import React from 'react';
import { render } from 'react-dom';
import Button from '../src/Button';

const reactElement = document.getElementById('react');
render(<Button>Hi</Button>, reactElement);
