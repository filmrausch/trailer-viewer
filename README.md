# trailer-viewer
A simple React app that displays a playlist of youtube videos.

## getting started

1. Install the dependencies with ```yarn install``` or ```npm install```.
2. Replace the data in ```src/links.json```with your own. It has the following shape:
```ts
{
  name: string 
  year: number
  url: string
  special: string
}
```
3. Start the site locally with ```yarn start```or ```npm start```

## hosting

This site can also be hosted with [github pages](https://pages.github.com/). Build a production build with ```yarn build```, and
deploy it to github with ```yarn deploy```. The site should then appear live on
[filmrausch.github.io/trailer-viewer](https://filmrausch.github.io/trailer-viewer).

## keyboard shortcuts

For easier navigation (so that you don't have to use a mouse), the trailer viewer has keyboard shortcuts!

- ```ARROW LEFT``` : next video
- ```ARROW RIGHT```: previous video
- ```SPACE```: enter full screen 
