import os

file_list = os.listdir('./public/md/')
md_file_list = [file_name for file_name in file_list if file_name.endswith('.md')]

file_str = f'export const MDFILE_LIST = {md_file_list}\n'

with open('./src/constants/MdFolderList.ts', 'w') as f:
    f.write(file_str)



# import os

# file_list = os.listdir('./public/md/')
# md_file_list = [file_name for file_name in file_list if file_name.endswith('.md')]

# file_str = f'export const filearr = {md_file_list}\n'

# file_list = os.listdir('./public/md2/')
# md_file_list = [file_name for file_name in file_list if file_name.endswith('.md')]

# file_str2 = f'export const filearr = {md_file_list}\n'

# with open('test2.txt', 'w') as f:
#     f.write(file_str+file_str2)