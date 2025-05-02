from sqlalchemy import Column, Integer, DateTime, ForeignKey, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid

from app.db.session import Base

class Result(Base):
    __tablename__ = "results"
    
    id = Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    challenge_id = Column(UUID(as_uuid=True), ForeignKey("challenges.id"), nullable=False)
    score = Column(Integer, nullable=False)
    date = Column(DateTime, default=datetime.utcnow)
    time = Column(Integer, nullable=True)  # Time taken in seconds/milliseconds
    details = Column(Text, nullable=True)  # JSON string for additional details
    
    # Relationships
    user = relationship("User", back_populates="results")
    challenge = relationship("Challenge", back_populates="results")
