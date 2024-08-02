"""this is a python script that will edit all the json file in multiples directories and subdirectories.
It will change:
"author": "AUTHORNAME"
to
"authors": [
        {
            "name": "AUTHORNAME",
        }
    ],

"""
import os
import json

def change_author(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        # try to load json file, if it fails, skip the file
        try:
            data = json.load(file)
        except json.decoder.JSONDecodeError:
            return
        if 'author' in data:
            author = data['author']
            data['authors'] = [{'name': author}]
            del data['author']
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4)

def main():
    for root, dirs, files in os.walk('.'):
        for file in files:
            if file.endswith('.json'):
                file_path = os.path.join(root, file)
                change_author(file_path)

if __name__ == '__main__':
    main()

