all: init lint
	python ./sum_frequencies.py ./MOCK_DATA.json

init:
	pip install -U pip pylint
	pip install -r ./requirements.txt

lint:
	pylint ./sum_frequencies.py
