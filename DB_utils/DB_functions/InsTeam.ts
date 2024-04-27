import { createClient } from '@supabase/supabase-js';
import {generateTeam} from './../TeamGen.ts';
import { Squad } from './../../common/class.ts';

// Configura il client di Supabase con le tue credenziali
const supabaseUrl = 'https://evcsymvmxpqrfbmhtget.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Y3N5bXZteHBxcmZibWh0Z2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwODUyNDgsImV4cCI6MjAyOTY2MTI0OH0.P96yvOfOYAsRJ1YzAUOsYejBw83uwhHEYTIyhnrwDCQ';
         
const supabase = createClient(supabaseUrl, supabaseKey);

// Funzione per inserire i dati della squadra nel database di Supabase
async function insertTeamIntoSupabase(team: Squad) {
  try {
    // Inserisce i dati della squadra nella tabella del database
    const { data, error } = await supabase
      .from('teams') // Nome della tua tabella nel database di Supabase
      .insert([team]); // Inserisce la squadra nella tabella

    if (error) {
      throw error;
    }

    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Genera la squadra
generateTeam().then(team => {
  if (team) {
    // Inserisce la squadra nel database di Supabase
    insertTeamIntoSupabase(team);
  } else {
    console.log("Errore durante la generazione della squadra.");
  }
});