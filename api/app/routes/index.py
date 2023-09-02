from fastapi import APIRouter
from app.routes import signup,login

router = APIRouter()

router.include_router(signup.router, tags=["accounts"], prefix="/signup")
router.include_router(login.router, tags=["accounts"], prefix="/login")