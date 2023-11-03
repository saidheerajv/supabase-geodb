import { createClient } from '@supabase/supabase-js'


const options = {}
export const supabase = createClient("https://rhsugtnhvfojipiyrizv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52ZG12dXN2a2h1ZHFsbmdtcmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMTY0NDAsImV4cCI6MjAxNDU5MjQ0MH0.dl06p8uSGa_qwdko6Fm-nzGeDasSxdJEexHpd1LPRI0",
    options);

