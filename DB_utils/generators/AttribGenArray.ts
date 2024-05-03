export async function AttribToArray(numAttributes: number,role:string): Promise<number[]> {
  try {
    const getRandomNumber = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const attributes: number[] = [];
    for (let i = 0; i < numAttributes; i++) {
      const attribute = getRandomNumber(50, 50); //  RANDOMIZATION
     // console.log(attribute);
      attributes.push(attribute);
  
    if (role="P") {attributes[0]=getRandomNumber(60,70);}//console.log(attributes);
    else if (role="SS") {attributes[2]=getRandomNumber(60,70);}
  }
   return attributes;
  } catch (error) {
    console.error('Unable to generate and add array:', error);
    return []; // 
  }
}