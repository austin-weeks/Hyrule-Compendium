# Pacer Code Test

### Hey Pacer folks 👋!
I created this app over the weekend and got a bit carried away :) I had a lot of fun with this project!

Thanks again for considering me for this position!


## The App - Hyrule Compendium
I chose to build a mini-encyclopedia that displays in-game items from the most recent *The Legend of Zelda* game: *Breath of the Wild*.

#### The app is live on [GitHub Pages]().

## API
The app fetches data from the open-source [Hyrule Compendium API](https://gadhagod.github.io/Hyrule-Compendium-API), which provides information for in-game items and regions from *Breath of the Wild*. The API has excellent documentation and is very easy to work with.

## Design
I chose a fairly clean/minimalist design for the app. I've already built a somewhat similar app with a more outside-the-box design, (see, [OSRS Stock App](https://austin-weeks.github.io/osrs-ge-app)), so this was a nice change of pace.

The app uses styling from [shadcn/ui](https://ui.shadcn.com) and is implemented with [Tailwind](https://tailwindcss.com).
- TODO: add ligma link

## Areas for Improvement
The CSS needs to be tweaked slightly to ensure proper layouts on mobile. This should be a relatively simple task due to the way the app is structured, but I choose not to tackle this for the sake of time.

I'd also like to add a dark mode toggle. This also would be a very simple addition but would require a decent chunk of time.

I'm not satisfied with the use of pagination for the category entries displays. If I were to work on the app further, I would probably implement a continuous scroll feature instead.

Lastly, I'd like to add a search feature so users can quickly pull up a particular compendium entry.

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
