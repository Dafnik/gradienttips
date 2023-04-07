import * as jsonGradients from "../assets/gradients.json";

export type gradientType = {name: string, colors: string[]}

export function getGradients(): gradientType[] {
  return jsonGradients;
}

export function transform(): void {
  const newgradients = [];
  for (const gradient of getGradients()) {
    let id = gradient.name.toLowerCase();
    id = id.replace(/\s/g, '-');
    id = id.replace('&', 'and');
    id = id.replace("'", '')
    newgradients.push({
      id: id,
      name: gradient.name,
      colors: gradient.colors
    })
  };
  console.log(JSON.stringify(newgradients));
}
