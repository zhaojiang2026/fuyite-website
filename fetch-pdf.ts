import { FetchClient, Config } from 'coze-coding-dev-sdk';

async function main() {
  const config = new Config();
  const client = new FetchClient(config);

  const pdfUrl = 'https://code.coze.cn/api/sandbox/coze_coding/file/proxy?expire_time=-1&file_path=assets%2F%E7%A6%8F%E4%BC%8A%E7%89%B9PDF.pdf&nonce=1a415c95-eb6a-4f37-b8e5-9a965e050b68&project_id=7632190294661873690&sign=b87d4020d5ec2afc9d29b87a57d22f71160d452ebb5bd2d417bd32e6c5cdfb05';

  console.log('正在读取 PDF 文件...');
  const response = await client.fetch(pdfUrl);

  console.log(`状态: ${response.status_code === 0 ? '成功' : '失败'}`);
  console.log(`标题: ${response.title}`);
  console.log(`文件类型: ${response.filetype}`);
  console.log(`URL: ${response.url}`);
  console.log('\n--- 内容 ---');

  // 提取文本内容
  const textContent = response.content
    .filter(item => item.type === 'text')
    .map(item => item.text)
    .join('\n');

  console.log(textContent);
}

main().catch(console.error);
