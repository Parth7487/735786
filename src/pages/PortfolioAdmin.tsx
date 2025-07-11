import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Settings, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PortfolioCMS from "../components/sections/PortfolioCMS";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PortfolioAdmin = () => {
  const navigate = useNavigate();
  const [showStats, setShowStats] = useState(true);

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Admin Header */}
      <div className="border-b border-beige/20 bg-charcoal/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate("/work")}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-beige"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
              <div className="h-6 w-px bg-beige/20" />
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-beige" />
                <h1 className="text-xl font-bold text-beige">
                  Portfolio Admin
                </h1>
                <Badge variant="secondary" className="text-xs">
                  CMS
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => setShowStats(!showStats)}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-beige"
              >
                <Eye className="w-4 h-4 mr-2" />
                {showStats ? "Hide" : "Show"} Stats
              </Button>

              <Button
                onClick={() => window.open("/work", "_blank")}
                variant="outline"
                size="sm"
                className="border-beige/20 text-beige hover:bg-beige/10"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview Site
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      {showStats && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-b border-beige/10 bg-charcoal/30"
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-charcoal/50 border-beige/10">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-beige mb-1">12</div>
                  <div className="text-sm text-gray-400">Total Projects</div>
                </CardContent>
              </Card>
              <Card className="bg-charcoal/50 border-beige/10">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    8
                  </div>
                  <div className="text-sm text-gray-400">Published</div>
                </CardContent>
              </Card>
              <Card className="bg-charcoal/50 border-beige/10">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    3
                  </div>
                  <div className="text-sm text-gray-400">Drafts</div>
                </CardContent>
              </Card>
              <Card className="bg-charcoal/50 border-beige/10">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    24
                  </div>
                  <div className="text-sm text-gray-400">
                    Before/After Images
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      )}

      {/* CMS Content */}
      <PortfolioCMS />

      {/* Footer */}
      <div className="border-t border-beige/20 bg-charcoal/50 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            Portfolio CMS v1.0 - Manage your portfolio projects and before/after
            comparisons
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAdmin;
