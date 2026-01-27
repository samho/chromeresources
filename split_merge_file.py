import os

def split_file(source_path, prefix="part", chunk_size=1024*1024*15):
    with open(source_path, 'rb') as source_file:
        chunk = source_file.read(chunk_size)
        part_number = 1
        while chunk:
            with open(f'{prefix}_{part_number}', 'wb') as part_file:
                part_file.write(chunk)
            chunk = source_file.read(chunk_size)
            part_number += 1


def merge_files(target_path, prefix='part'):
    with open(target_path, 'wb') as target_file:
        part_number = 1
        while True:
            part_path = f'{prefix}_{part_number}'
            try:
                with open(part_path, 'rb') as part_file:
                    target_file.write(part_file.read())
            except FileNotFoundError:
                break
            part_number += 1

split_file(f'./tujiellm.zip', "tujiellm")
split_file(f'./sheruqianchu-Kubernetes.zip', "sheruqianchu-Kubernetes")
split_file(f'./Rust.zip', "Rust")
# merge_files(f'Rust.zip', "Rust")
# merge_files(f'sheruqianchu-Kubernetes.zip', "sheruqianchu-Kubernetes")
# merge_files(f'tujiellm.zip', "tujiellm")
