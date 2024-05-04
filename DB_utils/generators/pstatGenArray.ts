import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://evcsymvmxpqrfbmhtget.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Y3N5bXZteHBxcmZibWh0Z2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwODUyNDgsImV4cCI6MjAyOTY2MTI0OH0.P96yvOfOYAsRJ1YzAUOsYejBw83uwhHEYTIyhnrwDCQ';

const supabase = createClient(supabaseUrl, supabaseKey);

export async function pstatGen() {
    console.log("Building Player Stats" ); 
    try {
        const { data, error } = await supabase
          .from('playerstats')
          .insert([
            {
             
              games: 0,
              ab: 0,
              h: 0,
              dh: 0,
              th: 0,
              hr: 0,
              ko: 0,
              bb: 0,
              safe: 0,
              vsbat: 0,
              ph: 0,
              k: 0,
              b: 0,
              pr: 0,
              pe: 0,
              fassist: 0,
              fe: 0,
              fo: 0
            }
          ])
          .select();

        if (error) {
            console.error('Error inserting new row:', error.message);
            return null;
        } else {
            const insertedRow = data ? data[0] : null;
            if (insertedRow) {
                console.log('New row inserted:', insertedRow);
                return insertedRow.pstats_id; // Restituisce l'ID inserito
            } else {
                console.log('Failed to insert new row.');
                return null;
            }
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Eseguire la funzione e gestire il valore restituito
pstatGen()
    .then((rowId) => {
        if (rowId !== null) {
            console.log('Row ID:', rowId);
            // Ora puoi usare rowId per ulteriori operazioni
        } else {
            console.log('Failed to insert new row.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
