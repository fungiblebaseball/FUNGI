import { createClient } from '@supabase/supabase-js';
import {generateTeamName} from '../../generators/SquadNameGen.ts';

// Configura il client di Supabase con le tue credenziali
const supabaseUrl = 'https://evcsymvmxpqrfbmhtget.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Y3N5bXZteHBxcmZibWh0Z2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwODUyNDgsImV4cCI6MjAyOTY2MTI0OH0.P96yvOfOYAsRJ1YzAUOsYejBw83uwhHEYTIyhnrwDCQ';
         
const supabase = createClient(supabaseUrl, supabaseKey);

// Funzione per inserire i dati della squadra nel database di Supabase
export async function insertTeamIntoSupabase(team :string) {
  try {
    // Inserisce i dati della squadra nella tabella del database
    const { data: Team, error } = await supabase
      .from('Teams') // Nome della tua tabella nel database di Supabase
      .insert([{tname: team}]); // Inserisce la squadra nella tabella
      
    if (error) {
      throw error;
    }

    console.log('Success:', Team);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Genera la squadra
let TeamName :string = generateTeamName() 
console.log(TeamName);
  if (TeamName) {
    // Inserisce la squadra nel database di Supabase
  //  insertTeamIntoSupabase(TeamName);
  } else {
    console.log("Errore durante la generazione della squadra.", TeamName);
  }
