import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://evcsymvmxpqrfbmhtget.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2Y3N5bXZteHBxcmZibWh0Z2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwODUyNDgsImV4cCI6MjAyOTY2MTI0OH0.P96yvOfOYAsRJ1YzAUOsYejBw83uwhHEYTIyhnrwDCQ';
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Fetches current player stats, then updates them by adding provided increments.
 * @param {number} pstats_id - The ID of the player stat entry to update.
 * @param {string} data - Updates in the format "field1,increment1;field2,increment2;..."
 */
export async function statUpd(pstats_id, data) {
  try {
    // Fetch current stats
    const { data: currentStats, error: fetchError } = await supabase
      .from('playerstats')
      .select()
      .match({ pstats_id: pstats_id })
      .single();

    if (fetchError) {
      console.error('Error fetching player stats:', fetchError);
      return null;
    }

    // Calculate new stats
    let updateObject = data.split(';').reduce((acc, pair) => {
      const [field, increment] = pair.split(',');
      const currentVal = currentStats[field] || 0;
      acc[field] = currentVal + parseInt(increment, 10);
      return acc;
    }, {});

    // Update stats with new values
    const { data: updatedRows, error: updateError } = await supabase
      .from('playerstats')
      .update(updateObject)
      .match({ pstats_id: pstats_id });

    if (updateError) {
      console.error('Error updating player stats:', updateError);
      return null;
    } else {
      console.log('Player stats updated:', updatedRows);
      return updatedRows;
    }
  } catch (error) {
    console.error('Error during the update operation:', error);
    return null;
  }
}

// Example usage
//statUpd(22, "ab,1;bb,1;k,1")
  //.then(updatedRows => {
   // if (updatedRows) {
   //   console.log('Update successful:', updatedRows);
 //   }
 // })
 // .catch(error => {
  //  console.error('Failed to update stats:', error);
 // });
