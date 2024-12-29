import { Flex, Text } from "@mantine/core";
import { FC } from "react";

export const HomeHeaderPresentation: FC = () => {
    return (
        <Flex direction="row" className="h-[300px] items-center border-double border-b-4 border-gray-700">
            <div className="w-1/2">
                <Text className="text-2xl font-bold">Gihyo C2C で</Text>
                <Text className="text-2xl font-bold">お気に入りのアイテムを見つけよう</Text>
            </div>
            <div className="w-1/2 space-y-4">
                <Text className="text-sm">
                    Gihyo C2C は実践的な
                    Next.jsアプリケーション開発で使われるデモアプリです。モックサーバーを使用しています。
                </Text>
                <Text className="text-sm">ソースコードはこちらの Github からダウンロードできます。</Text>
                <Text className="text-sm">
                    このアプリは TypeScript/Next.js で作成されており、バックエンドのモック API は json-server
                    が使用されています。
                </Text>
            </div>
        </Flex>
    );
};
