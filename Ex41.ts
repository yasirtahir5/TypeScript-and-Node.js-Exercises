/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that 
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to 
see that the list has actually been modified. */

let magician_Names: string[] = [`John`,`Alex`,`JoJo`,`Tim Pane`];
  
let show_magicians5 = () => {
    magician_Names.forEach((mag_name) => {
      console.log(` ${mag_name}`);
    });
  };
  
  let make_great = (magicians: string[]) => {
    for (let i = 0; i < magicians.length; i++) {
      magician_Names[i] = `Great ${magician_Names[i]}`;
    }
  };
  
  console.log(`Before adding Great Word Before Magican namees`);
  show_magicians5();
  
  make_great(magician_Names);
  
  console.log(`Displaying Magcian Array Names After Adding Keyword 'Great'`);
  show_magicians5();

//Program End