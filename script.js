const supabaseUrl = 'https://gwht...supabase.co'; // full URL from Supabase
const supabaseKey = 'eyJhbGciOiJI...'; // full anon/public API key from Supabase
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  let { error } = await supabase.auth.signUp({ email, password });
  if (error) alert(error.message); else alert("Signup successful.");
}

async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  let { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) alert(error.message); else alert("Login successful.");
}

async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) alert(error.message); else alert("Logged out.");
}
