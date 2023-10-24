"""
Make langchain vector DB for AI to learn from
https://python.langchain.com/docs/use_cases/question_answering/vector_db_text_generation
"""
import os
import pickle
import pathlib
from langchain.docstore.document import Document
from langchain.text_splitter import CharacterTextSplitter


def get_github_docs():
    repo_path = pathlib.Path(os.path.abspath("../../docs"))
    markdown_files = list(repo_path.glob("*/*.md")) + list(repo_path.glob("*/*.mdx"))
    for markdown_file in markdown_files:
        print("->", markdown_file)
        with open(markdown_file, "r") as f:
            yield Document(
                page_content=f.read(),
                metadata={"source": str(markdown_file.relative_to(repo_path))},
            )


if __name__ == "__main__":
    sources = get_github_docs()

    source_chunks = []
    splitter = CharacterTextSplitter(separator=" ", chunk_size=1024, chunk_overlap=0)
    for source in sources:
        for chunk in splitter.split_text(source.page_content):
            source_chunks.append(Document(page_content=chunk, metadata=source.metadata))

    with open("langchain_db.pkl", "wb") as f:
        pickle.dump(source_chunks, f, protocol=5)
        print("<- Saved langchain_db.pkl")

    with open("langchain_db.pkl", "rb") as f:
        source_chunks = pickle.load(f)
        print("<- Tested langchain_db.pkl")
        print(f"<- {len(source_chunks)} documents")
