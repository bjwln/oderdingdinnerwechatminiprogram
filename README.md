# oderdingdinnerwechatminiprogram
前后端分离微信小程序
# 可能存在的非致命BUG
后端项目导入后，遇到InvalidVCSrootmapping错误，通常是由于关联的git项目不存在导致。解决方法是进入File-Settings-VersionControl，选择报错的条目，将VCS设置为none即可消除此警告。
原因：目录所示的git项目不存在，导致这个报错
解决方法：在File-Setting-Version Control选中报红的条目，将其VCS设置为none即可
来自CSDN博主：https://blog.csdn.net/qq_35091353/article/details/119424447?ops_request_misc=%257B%2522request%255Fid%2522%253A%25229747c96762fbc9da9f76bbb5658111c0%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=9747c96762fbc9da9f76bbb5658111c0&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_click~default-1-119424447-null-null.142^v101^pc_search_result_base2&utm_term=idea%E6%97%A0%E6%95%88%E7%9A%84vcs%E6%A0%B9%E6%98%A0%E5%B0%84&spm=1018.2226.3001.4187
