from django.shortcuts import render

import os
import random

def get_word():
    module_dir = os.path.dirname(__file__)
    file_path = os.path.join(module_dir, 'words.txt')
    data_file = open(file_path, 'r')
    word_list = []
    for item in data_file.readlines():
        word_list.append(item[0:5].upper())

    random_number = random.randrange(0, 5756)
    chosen_word = word_list[random_number]
    return [word_list, chosen_word]



def index(request):
    words_to_use = get_word()
    title = 'Woordle'
    context = {'wordlist': words_to_use[0],
                'word' : words_to_use[1],
                'title' : title}
    return render(request, 'woordle/woordletemplate.html', context)

