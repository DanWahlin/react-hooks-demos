// Based on post by Kyle Shelvin 
// https://kyleshevlin.com/using-react-memo-to-avoid-unnecessary-rerenders
const random255 = () => Math.floor(Math.random() * 255);

const randomBackground = () => {
  const r = random255()
  const g = random255()
  const b = random255()

  return `rgba(${r}, ${g}, ${b}, 0.3)`;
}

export default randomBackground;