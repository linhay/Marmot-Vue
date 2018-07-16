git checkout .
git pull
# 杀死8080端口进程
kill -9 $(lsof -i:8080 |awk '{print $2}' | tail -n 2)
npm run dev

