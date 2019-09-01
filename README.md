[![Build Status](https://travis-ci.org/dbiagi/fake-info-generator.svg?branch=master)](https://travis-ci.org/dbiagi/fake-info-generator)

# fake-info-generator

## About

Webextension to generate fake information like Credicards and CPF/CNPJ.

Obviously the credicard won't work. They are for testing purposes only. Without a valid owner name, an expiration date and a valid CVV code, it can't be used for real transactions. The algorithm is highly available on the internet and is known as [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).


The purpose of this extension is to test form validation strategies on staging environments.

This extension uses the [webextension-toolbox](https://github.com/webextension-toolbox/webextension-toolbox) to generate the extension packages. So, theoretically, it should work on Firefox, Chrome, Opera and Edge but is only tested on Firefox and Chrome.

---

## Links

### [Mozilla Addons](https://addons.mozilla.org/en-US/firefox/addon/fake-info-generator/)

## How to build

Install the dependencies

```sh
npm install
```

Run unit tests
```sh
npm test
```

Generate the extension package by vendor (firefox | chrome | edge | opera)
```sh
npm run build --vendor VENDOR_NAME
```

