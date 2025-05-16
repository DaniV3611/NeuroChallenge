from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models import user as user_models, result as result_models
from app.schemas.score import UserRanking, ChallengeRanking

router = APIRouter()

@router.get("/ranking/general", response_model=list[UserRanking])
def get_general_ranking(db: Session = Depends(get_db)):
    users = db.query(
        user_models.User.id.label("user_id"),
        user_models.User.username,
        user_models.User.total_score
    ).order_by(user_models.User.total_score.desc()).all()
    return users

@router.get("/ranking/challenge/{challenge_id}", response_model=list[ChallengeRanking])
def get_challenge_ranking(challenge_id: int, db: Session = Depends(get_db)):
    results = (
        db.query(
            result_models.Result.user_id,
            user_models.User.username,
            result_models.Result.challenge_id,
            result_models.Result.score.label("challenge_score")
        )
        .join(user_models.User, user_models.User.id == result_models.Result.user_id)
        .filter(result_models.Result.challenge_id == challenge_id)
        .order_by(result_models.Result.score.desc())
        .all()
    )
    return results