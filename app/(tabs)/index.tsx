import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/Onboarding"
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        <Text className="text-white">Go to Onboarding</Text>
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        <Text className="text-white">Go to Sign In</Text>
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary px-4 py-2 text-white"
      >
        <Text className="text-white">Go to Sign Up</Text>
      </Link>
      <Link href="/subscriptions/spotify">Subscriptions Spotify</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude Max Subscriptions
      </Link>
    </View>
  );
}
