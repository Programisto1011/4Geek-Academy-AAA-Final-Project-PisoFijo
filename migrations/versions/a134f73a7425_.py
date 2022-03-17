"""empty message

Revision ID: a134f73a7425
Revises: 5000e9b7cdc1
Create Date: 2022-03-16 11:43:04.032856

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a134f73a7425'
down_revision = '5000e9b7cdc1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('property', 'latitude',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=20),
               existing_nullable=True)
    op.alter_column('property', 'longitude',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=20),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('property', 'longitude',
               existing_type=sa.Float(precision=20),
               type_=sa.REAL(),
               existing_nullable=True)
    op.alter_column('property', 'latitude',
               existing_type=sa.Float(precision=20),
               type_=sa.REAL(),
               existing_nullable=True)
    # ### end Alembic commands ###