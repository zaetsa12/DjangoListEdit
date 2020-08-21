from .models import CustomUser
from rest_framework  import viewsets
from .serializers import CustomUserSerializer


class UsersViewSet(viewsets.ModelViewSet):
    serializer_class = CustomUserSerializer
    queryset = CustomUser.objects.all()

    # def get_queryset(self):
    #     return self.request.Users.objects.all()