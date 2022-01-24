from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = 'index.html'


class ComingSoonView(TemplateView):
    template_name = 'comingsoon.html'