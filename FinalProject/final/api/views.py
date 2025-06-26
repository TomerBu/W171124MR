from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User
from .serialiazers import (UserSerializer, PostSerializer,
                           UserProfileSerializer, CommentSerializer,
                           TagSerializer, PostUserLikesSerializer)


from .models import Tag, UserProfile, Post, Comment, PostUserLikes


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class TagViewSet(ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class PostUserLikesViewSet(ModelViewSet):
    queryset = PostUserLikes.objects.all()
    serializer_class = PostUserLikesSerializer


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class UserProfileViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
