# Pacer Code Test 🏎️

### Hey Pacer folks 👋!
Here is my submission for the Pacer Front-End Code Test, I had a lot of fun with this project.

Thanks again for considering me for this position!


## The App - Hyrule Compendium
I chose to build a mini-encyclopedia that displays in-game items from *The Legend of Zelda: Breath of the Wild*.

#### You can view the app live on [GitHub Pages](https://austin-weeks.github.io/Pacer-Test).

<picture>
  <img src="preview.png" />
</picture>

## API
The app fetches data from the open-source [Hyrule Compendium API](https://gadhagod.github.io/Hyrule-Compendium-API), which provides information for in-game items and regions from *Breath of the Wild*. The API has excellent documentation and is very easy to work with.

## Design
I went with a clean/minimalist design for the app. I've already built a similar project with a more out-there design, (see, [OSRS Stock App](https://austin-weeks.github.io/osrs-ge-app)), so this was a nice change of pace.

#### Here is a basic mock-up of the app on [Figma](https://www.figma.com/design/BWS8yYKjvKISWmKPlin2Lk/Pacer-Code-Test---Hyrule-Compendium-Mock-Up?m=auto&t=wlkw0F2m1XbnjqBK-1).

The app uses components from [shadcn/ui](https://ui.shadcn.com) and is styled with [Tailwind](https://tailwindcss.com).

## Areas for Improvement
I'd like to add a dark mode toggle. This should be a simple addition but I chose to skip over this in the interest of time.

I'm not fully satisfied with my use of pagination for the category pages. If I were to work on the app further, I would probably implement a continuous scroll feature instead.

Lastly, I'd like to add a search feature so users can quickly pull up a particular compendium entry.
*For reference, I implemented a similar feature in my [OSRS Stock App](https://austin-weeks.github.io/osrs-ge-app).*

## Running Locally
<span>1.</span> Clone the repository
```bash
$ git clone https://github.com/austin-weeks/Pacer-Test.git
```
<span>2.</span> Install node dependencies
```bash
$ npm install
```
<span>3.</span> Run the app with Vite
```bash
$ npm run dev
```
