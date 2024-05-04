    export async function AttribToArray(numAttributes: number, role: string): Promise<number[]> {
      try {
        const getRandomNumber = (min: number, max: number): number => {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    
        const attributes: number[] = [];
        for (let i = 0; i < numAttributes; i++) {
          let attribute;
          switch (role) {
            case "P":
              if (i === 0) {
                attribute = getRandomNumber(60, 70);
              } else {
                attribute = getRandomNumber(50, 55);
              }
              break;
            case "SS":
              if (i === 1|| i === 2) {
                attribute = getRandomNumber(60, 70);
              } else {
                attribute = getRandomNumber(55, 50);
              }
              break;
            case "CF":
            case "LF":
            case "RF":
              if (i === 2 || i === 3) {
                attribute = getRandomNumber(60, 70);
              } else {
                attribute = getRandomNumber(55, 60);
              }
              break;
            case "1B":
            if (i===1|| i===2) {
              attribute = getRandomNumber(55, 65);
            
            } else {
              attribute = getRandomNumber(50, 50);
            }
            break;
            case "3B":
            if ( i===2 ||i===3 ) {
              attribute = getRandomNumber(60, 70);
            
            } else {
              attribute = getRandomNumber(50, 50);
            }
            break;
            default:
              attribute = getRandomNumber(50, 50);
              break;
          }
        
          attributes.push(attribute);
        }
       return attributes;
      } 
        catch (error) {
        console.error('Unable to generate and add array:', error);
        return [];
      }
    }