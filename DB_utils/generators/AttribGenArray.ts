export async function AttribToArray(numAttributes: number): Promise<number[]> {
  try {
    const getRandomNumber = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const attributes: number[] = [];
    for (let i = 0; i < numAttributes; i++) {
      const attribute = getRandomNumber(30, 80); //  RANDOMIZATION
     // console.log(attribute);
      attributes.push(attribute);
    }
     //console.log(attributes);
    return attributes;
  } catch (error) {
    console.error('Unable to generate and add array:', error);
    return []; // 
  }
}