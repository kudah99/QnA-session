from fastapi import  FastAPI
from app.routes.index import router as api_router
from app.core.config import API_PREFIX, DEBUG, PROJECT_NAME, VERSION
from starlette.middleware.cors import CORSMiddleware





def get_application() -> FastAPI:
    application = FastAPI(title=PROJECT_NAME, debug=DEBUG, version=VERSION)

    # application.add_middleware(
    #     allow_origins= ["*"],
    #     allow_credentials=True,
    #     allow_methods=["*"],
    #     allow_headers=["*"],
    # )

    application.include_router(api_router, prefix=API_PREFIX)

    return application


app = get_application()