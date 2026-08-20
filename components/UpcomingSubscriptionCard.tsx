import { formatCurrency } from "@/lib/util";
import React from "react";
import { Image, Text, View } from "react-native";

const UpcomingSubscriptionCard = ({
  data: { id, name, price, daysLeft, icon, currency },
}: {
  data: UpcomingSubscription;
}) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <View className="rounded-xl bg-gray-300/40 flex items-center justify-center">
          <Image source={icon} className="upcoming-icon p-3" />
        </View>
        <View>
          <Text className="upcoming-price">
            {formatCurrency(price, currency)}
          </Text>
          <Text className="upcoming-meta" numberOfLines={1}>
            {daysLeft > 1 ? `${daysLeft} days left` : "Last day"}
          </Text>
        </View>
      </View>

      <Text className="upcoming-name">{name}</Text>
    </View>
  );
};

export default UpcomingSubscriptionCard;
