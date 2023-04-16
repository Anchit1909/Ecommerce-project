<a href="https://aurius-ecommerce.vercel.app/">
  <img alt="Aurius - Ecommerce Website" src="/public/screenshot.png">
    <h1 align="center">Aurius</h1>
</a>

<p align="center">
  Shop for your favourite electronic devices
</p>

<p align="center">
  <a href="https://twitter.com/anchit1909">
    <img src="https://img.shields.io/twitter/follow/anchit1909?style=flat&label=anchit1909&logo=twitter&color=0bf&logoColor=fff" alt="Anchit Sinha Twitter follower count" />
  </a>
  <a href="https://github.com/Anchit1909/BackToLife-Old-Image-Regeneration">
    <img src="https://img.shields.io/github/stars/Anchit1909/aurius-ecommerce-website?label=Anchit1909%2FBackToLife" alt="BackToLife repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#how-it-works"><strong>How It Works</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

Aurius is an ecommerce application for electronic devices using which shop owners can easily upload products without any technical support and users can enjoy a seamless shopping experience.

## How it works

- This app uses Sanity headless CMS for storing data of the products which makes it easy for anyone to upload products to their website without having any technical knowledge.
- The user can sign in to the website. This feature is powered by NextAuth.
- All the payment processing is done using Stripe.

## Tech Stack

- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sanity](https://www.sanity.io/) (Headless CMS)
- [Stripe] (https://stripe.com/) (For processing payments)

## Running Locally

### Cloning the repository to the local machine.

```bash
git clone
```

### Creating an account on Sanity to get an API key.

1. Go to [Sanity](https://www.sanity.io/) to make an account.
2. Get the API key from the API Keys section.

### Storing API key in .env file.

Create a file in root directory of project named **.env.local**. And store your API key in it, as shown in the .example.env file.

### Installing the dependencies.

```bash
npm install
```

### Running the application.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

### To manage Sanity.

Go to **sanity_backend** folder and then run the following command.

```bash
npm run dev
```

## Author

- Anchit Sinha ([@anchit1909](https://twitter.com/anchit1909))
