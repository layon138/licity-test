
export const prooviderAuthenticationGuard = (async () => {
    let shouldNavigate = false;
    const user=JSON.parse(localStorage.getItem('user') || "{}") || '';
    console.log(user)
    if (user.role==='proovider' ) {
          shouldNavigate=true;
    }
    return shouldNavigate;
  })