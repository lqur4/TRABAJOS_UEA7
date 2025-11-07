//import { createClient } from '@supabase/supabase-js'

const supabaseClient = supabase.createClient('https://ucnfnommirngccqvpmhg.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbmZub21taXJuZ2NjcXZwbWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MTM2ODgsImV4cCI6MjA3NzQ4OTY4OH0.DdlUfMla6p2spWJdfz0aP4o7StfYZ8ElXywHp_1G6AU')

    console.log(supabaseClient)