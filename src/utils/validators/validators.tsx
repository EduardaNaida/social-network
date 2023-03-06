import React from 'react'

export const requiredField = (value: string) => {
  if (value) return undefined;
  return 'Field is required!'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
}

export const requiredLength = (value: string) => {
  const maxLength = 200;
  if (value) {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  }
}