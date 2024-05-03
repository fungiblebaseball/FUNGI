import { generateTeamName } from '../../generators/SquadNameGen.ts';
import { generateName } from '../../generators/NamesGen.ts';
import { createClient } from '@supabase/supabase-js';
import { AttribToArray } from '../../generators/AttribGenArray.ts';

const supabaseUrl = 'https://evcsymvmxpqrfbmhtget.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Y3N5bXZteHBxcmZibWh0Z2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwODUyNDgsImV4cCI6MjAyOTY2MTI0OH0.P96yvOfOYAsRJ1YzAUOsYejBw83uwhHEYTIyhnrwDCQ';


const supabase = createClient(supabaseUrl, supabaseKey);

// Funzione per generare attributes
export async  function InsertPlayer(name:string, role:string, LineUp:number) {
    try {
        const { data: nameID, error: attribError } = await supabase
            .from('Players')
            .insert([{pname: name , role: role , lineup:LineUp}]);
        
        if (nameID==0) {
            throw attribError;
        }

    } catch (error) {
        console.error('Si è verificato un errore durante la creazione degli attributi:', error.message);
     
        throw error;
    }
}
//const NameGen = await generateName(); 
//InsertPlayer(NameGen);