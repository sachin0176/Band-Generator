# adjective-noun-generator

Generates a random english language name consisting of an adjective and a noun.

## Installation

Using npm:

```
$ npm i adjective-noun-generator
```

## Usage

`adjectiveNounGenerator([options: Options = {}])`;

### Default behavior:

```
import adjectiveNounGenerator from 'adjective-noun-generator';

const randomName = adjectiveNounGenerator();

console.log(randomName);
```

### Passing custom options object:

```
import adjectiveNounGenerator from 'adjective-noun-generator';

const randomName = adjectiveNounGenerator({
  separator: '_'
});

console.log(randomName);
```

## Options

- `separator: string = ' '` - Defines the separator string between the adjective and the noun.

- `caseStyle: 'capital'|'lower'|'upper'|'sentence' = 'capital'` - Specifies the use of uppercase and lowercase letters in the generated string.

  - `'capital'` - Demonstrative Example
  - `'lower'` - demonstrative example
  - `'upper'` - DEMONSTRATIVE EXAMPLE
  - `'sentence'` - Demonstrative example
