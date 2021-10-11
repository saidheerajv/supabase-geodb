import { createClient } from '@supabase/supabase-js'


const options = {}
export const supabase = createClient("https://rhsugtnhvfojipiyrizv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTg3MjU0NCwiZXhwIjoxOTQ1NDQ4NTQ0fQ.dCZFzVF9B4CUIkXNPsdXHKDGr9YoT1EOXlxG7yyQaJg", options);

