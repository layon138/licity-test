
export const buildingAuthenticationGuard = (async () => {
    let shouldNavigate = false;
    const user=JSON.parse(localStorage.getItem('user') || "{}") || '';
    console.log(user)
    if (user.role==='building' ) {
          shouldNavigate=true;
    }
    return shouldNavigate;
  })